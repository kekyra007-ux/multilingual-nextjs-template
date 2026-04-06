// components/LicenseModal.jsx
import { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function LicenseModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <Overlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="License"
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton type="button" onClick={onClose} aria-label="Close">
          ✕
        </CloseButton>

        <ScrollArea>
          <Image
            src="/license.png"
            alt="License"
            width={1200}
            height={1600}
            priority
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </ScrollArea>
      </Modal>
    </Overlay>
  );
}
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.72);

  /* центр */
  display: grid;
  place-items: center;

  /* важно для мобилы: паддинги + плавающий vh */
  padding: 16px;
  overflow: hidden;

  @supports (height: 100dvh) {
    min-height: 100dvh;
  }

  @media (max-width: 520px) {
    padding: 10px;
    place-items: center;
  }
`;

const Modal = styled.div`
  position: relative;

  width: min(980px, calc(100vw - 32px));

  /* десктоп как было */
  height: min(86vh, 860px);
  max-height: calc(100vh - 32px);

  border-radius: 16px;
  background: rgba(10, 10, 10, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.75);

  overflow: hidden;

  /* фикс прыжков на мобиле: используем dvh */
  @supports (height: 100dvh) {
    height: min(86dvh, 860px);
    max-height: calc(100dvh - 32px);
  }

  @media (max-width: 520px) {
    width: calc(100vw - 20px);

    height: calc(100vh - 20px);
    max-height: calc(100vh - 20px);

    border-radius: 14px;
  }

  @supports (height: 100dvh) {
    @media (max-width: 520px) {
      height: calc(100dvh - 20px);
      max-height: calc(100dvh - 20px);
    }
  }
`;

const ScrollArea = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px;

  overflow-y: auto;
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;

  display: block;

  @media (max-width: 520px) {
    padding: 12px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 42px;
  height: 42px;
  border-radius: 999px;

  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  display: grid;
  place-items: center;

  backdrop-filter: blur(6px);

  &:hover {
    background: rgba(0, 0, 0, 0.75);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 520px) {
    width: 40px;
    height: 40px;
    top: 8px;
    right: 8px;
  }
`;
