// jest-dom 커스텀 매처 임포트 (toBeInTheDocument 등)
import "@testing-library/jest-dom";

// jsdom 환경에서 누락된 ResizeObserver API 폴리필
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

// jsdom 환경에서 누락된 PointerEvent 폴리필
if (typeof window !== "undefined" && !window.PointerEvent) {
  // @ts-expect-error - 테스트 환경용 폴리필
  window.PointerEvent = class PointerEvent extends MouseEvent {
    constructor(type: string, params: PointerEventInit = {}) {
      super(type, params);
    }
  };
}

// matchMedia 폴리필 (next-themes 등이 사용)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
