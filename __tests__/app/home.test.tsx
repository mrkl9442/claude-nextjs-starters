import { render, screen } from "@testing-library/react";
import Home from "@/app/(marketing)/page";

// Next.js Link 컴포넌트 모킹
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  MockLink.displayName = "MockLink";
  return MockLink;
});

// 홈 페이지 컴포넌트 테스트
describe("홈 페이지", () => {
  it("메인 헤딩이 렌더링된다", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("'빠르게 시작하세요' 문구가 표시된다", () => {
    render(<Home />);
    expect(screen.getByText(/빠르게 시작하세요/)).toBeInTheDocument();
  });

  it("시작하기 링크가 존재한다", () => {
    render(<Home />);
    // 여러 시작하기 링크 중 하나 이상 존재
    const startLinks = screen.getAllByRole("link", { name: /시작하기/ });
    expect(startLinks.length).toBeGreaterThan(0);
  });

  it("기술 스택 배지들이 렌더링된다", () => {
    render(<Home />);
    expect(screen.getByText("Next.js 16")).toBeInTheDocument();
    expect(screen.getByText("React 19")).toBeInTheDocument();
    expect(screen.getByText("TypeScript 5")).toBeInTheDocument();
  });

  it("기능 목록 섹션이 렌더링된다", () => {
    render(<Home />);
    expect(screen.getByText("모든 것이 준비되어 있습니다")).toBeInTheDocument();
    expect(screen.getByText("Next.js 16 App Router")).toBeInTheDocument();
    expect(screen.getByText("다크 모드 지원")).toBeInTheDocument();
  });

  it("팀 멤버 섹션이 렌더링된다", () => {
    render(<Home />);
    expect(screen.getByText("팀과 함께 시작하세요")).toBeInTheDocument();
    expect(screen.getByText("김개발")).toBeInTheDocument();
  });

  it("GitHub 링크가 존재한다", () => {
    render(<Home />);
    const githubLink = screen.getByRole("link", { name: "GitHub" });
    expect(githubLink).toBeInTheDocument();
  });
});
