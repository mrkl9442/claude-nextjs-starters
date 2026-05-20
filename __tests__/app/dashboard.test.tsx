import { render, screen } from "@testing-library/react";
import DashboardPage from "@/app/(dashboard)/dashboard/page";

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

// 대시보드 페이지 컴포넌트 테스트
describe("대시보드 페이지", () => {
  it("대시보드 제목이 렌더링된다", () => {
    render(<DashboardPage />);
    expect(
      screen.getByRole("heading", { name: "대시보드" })
    ).toBeInTheDocument();
  });

  it("설명 텍스트가 표시된다", () => {
    render(<DashboardPage />);
    expect(
      screen.getByText("비즈니스 현황을 한눈에 확인하세요.")
    ).toBeInTheDocument();
  });

  it("통계 카드들이 렌더링된다", () => {
    render(<DashboardPage />);
    expect(screen.getByText("총 매출")).toBeInTheDocument();
    expect(screen.getByText("신규 사용자")).toBeInTheDocument();
    expect(screen.getByText("주문 건수")).toBeInTheDocument();
    expect(screen.getByText("전환율")).toBeInTheDocument();
  });

  it("주문 탭이 기본으로 표시된다", () => {
    render(<DashboardPage />);
    // "최근 주문" 텍스트는 탭 버튼과 카드 제목 두 곳에 존재하므로 getAllByText 사용
    const elements = screen.getAllByText("최근 주문");
    expect(elements.length).toBeGreaterThan(0);
  });

  it("주문 테이블 헤더가 표시된다", () => {
    render(<DashboardPage />);
    expect(screen.getByText("주문번호")).toBeInTheDocument();
    expect(screen.getByText("고객")).toBeInTheDocument();
    expect(screen.getByText("상태")).toBeInTheDocument();
    expect(screen.getByText("금액")).toBeInTheDocument();
  });

  it("최근 주문 데이터가 표시된다", () => {
    render(<DashboardPage />);
    expect(screen.getByText("#1234")).toBeInTheDocument();
    expect(screen.getByText("김민준")).toBeInTheDocument();
  });

  it("브레드크럼이 렌더링된다", () => {
    render(<DashboardPage />);
    // 홈 링크가 있는지 확인
    expect(screen.getByRole("link", { name: "홈" })).toBeInTheDocument();
  });
});
