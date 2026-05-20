import { cn } from "@/lib/utils";

// cn 유틸리티 함수 테스트 - clsx + tailwind-merge 조합 검증
describe("cn 유틸리티 함수", () => {
  it("단일 클래스명을 그대로 반환한다", () => {
    expect(cn("text-red-500")).toBe("text-red-500");
  });

  it("여러 클래스명을 공백으로 합친다", () => {
    expect(cn("text-red-500", "bg-blue-300")).toBe("text-red-500 bg-blue-300");
  });

  it("Tailwind 충돌 클래스를 올바르게 병합한다", () => {
    // tailwind-merge가 마지막 클래스를 우선하는지 검증
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("falsy 값(false, null, undefined)을 무시한다", () => {
    expect(cn("base-class", false, null, undefined, "extra-class")).toBe(
      "base-class extra-class"
    );
  });

  it("조건부 클래스 객체를 처리한다", () => {
    expect(cn({ "text-red-500": true, "text-blue-500": false })).toBe(
      "text-red-500"
    );
  });

  it("배열 형태의 클래스명을 처리한다", () => {
    expect(cn(["text-sm", "font-bold"])).toBe("text-sm font-bold");
  });

  it("인자가 없을 경우 빈 문자열을 반환한다", () => {
    expect(cn()).toBe("");
  });

  it("중복된 padding 클래스를 병합한다", () => {
    // tailwind-merge: p-2와 px-4 충돌 시 마지막 클래스 계열 우선
    expect(cn("p-2", "px-4")).toBe("p-2 px-4");
  });
});
