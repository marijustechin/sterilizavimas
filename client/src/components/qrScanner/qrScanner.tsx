import { useEffect, useRef, useState } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';
import type { IScannerControls } from '@zxing/browser';
import type { Result } from '@zxing/library';
import { useAppDispatch } from '../../store/store';
import { getStickerDetails } from '../../store/features/medicSlice';
import toast from 'react-hot-toast';

export const QRScanner = () => {
  const dispatch = useAppDispatch();

  const [scannedCodes, setScannedCodes] = useState<string[]>([]);

  const controlsRef = useRef<IScannerControls | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Nauja: vietoj tikrinimo per state, laikom matytų kodų rinkinį ref'e (nedaro re-render)
  const seenRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    dispatch(getStickerDetails({ stickerString: 'CI=10;DI=7;II=13' }));
  }, []);

  useEffect(() => {
    const startScanner = async () => {
      const codeReader = new BrowserQRCodeReader();

      try {
        const devices = await BrowserQRCodeReader.listVideoInputDevices();
        const backCam =
          devices.find((d) => /back|rear|environment/i.test(d.label))
            ?.deviceId ?? devices[0]?.deviceId;

        const controls = await codeReader.decodeFromVideoDevice(
          backCam,
          videoRef.current!, // efektas paleidžiamas po mount — ref jau bus
          (res: Result | null | undefined) => {
            if (!res) return;

            const codeText = res.getText().trim();
            if (!codeText) return;

            // Dedup be state — saugiau ir greičiau
            if (seenRef.current.has(codeText)) return;
            seenRef.current.add(codeText);

            // State atnaujinam per funkciją (nebijo "stale" reikšmės)
            setScannedCodes((prev) => [...prev, codeText]);

            // Tavo logika
            dispatch(getStickerDetails({ stickerString: codeText }));

            if (navigator.vibrate) navigator.vibrate(30);
            toast.success(`Nuskaitytas: ${codeText}`);
          }
        );

        controlsRef.current = controls;
      } catch (error) {
        console.error('Camera init error:', error);
        toast.error(
          'Kameros inicijavimo klaida (patikrink HTTPS ir leidimą kamerai)'
        );
      }
    };

    startScanner();

    return () => {
      // tvarkingas sustabdymas
      controlsRef.current?.stop();
    };
    // ⬇️ Paleidžiam tik kartą. dispatch yra stabilus (RTK), todėl jo į deps dėti nereikia.
  }, []); // <-- svarbu: be scannedCodes!

  return (
    <section className='w-1/2'>
      <div className='space-y-1'>
        {scannedCodes.map((code) => (
          <p key={code} className='text-sm'>
            {code}
          </p>
        ))}
      </div>

      <video
        ref={videoRef}
        className='mt-2 w-full max-w-md rounded bg-black aspect-[3/4] object-cover'
        playsInline
        muted
      />
    </section>
  );
};
