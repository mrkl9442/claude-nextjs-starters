import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

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

// NotFound 페이지 컴포넌트 테스트
describe("NotFound 페이지", () => {
  it("404 텍스트가 렌더링된다", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("페이지를 찾을 수 없다는 메시지가 표시된다", () => {
    render(<NotFound />);
    expect(screen.getByText("페이지를 찾을 수 없습니다")).toBeInTheDocument();
  });

  it("안내 문구가 표시된다", () => {
    render(<NotFound />);
    expect(
      screen.getByText("요청하신 페이지가 존재하지 않거나 이동되었습니다.")
    ).toBeInTheDocument();
  });

  it("홈으로 돌아가기 링크가 존재한다", () => {
    render(<NotFound />);
    const homeLink = screen.getByRole("link", { name: /홈으로 돌아가기/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
