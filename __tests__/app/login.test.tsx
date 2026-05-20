import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "@/app/(auth)/login/page";

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

// sonner toast 모킹
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// 로그인 페이지 컴포넌트 테스트
describe("로그인 페이지", () => {
  it("로그인 폼이 렌더링된다", () => {
    render(<LoginPage />);
    // "로그인" 텍스트는 카드 제목과 버튼에 모두 존재하므로 getAllByText 사용
    const loginTexts = screen.getAllByText("로그인");
    expect(loginTexts.length).toBeGreaterThan(0);
  });

  it("이메일 입력 필드가 존재한다", () => {
    render(<LoginPage />);
    const emailInput = screen.getByPlaceholderText("you@example.com");
    expect(emailInput).toBeInTheDocument();
  });

  it("비밀번호 입력 필드가 존재한다", () => {
    render(<LoginPage />);
    const passwordInput = screen.getByPlaceholderText("••••••••");
    expect(passwordInput).toBeInTheDocument();
  });

  it("로그인 버튼이 존재한다", () => {
    render(<LoginPage />);
    // submit 타입의 버튼 - 텍스트 매칭 사용
    const submitButton = screen.getByRole("button", { name: /^로그인$/ });
    expect(submitButton).toBeInTheDocument();
  });

  it("회원가입 링크가 존재한다", () => {
    render(<LoginPage />);
    const registerLink = screen.getByRole("link", { name: "회원가입" });
    expect(registerLink).toBeInTheDocument();
    expect(registerLink).toHaveAttribute("href", "/register");
  });

  it("비밀번호 찾기 링크가 존재한다", () => {
    render(<LoginPage />);
    const forgotLink = screen.getByRole("link", { name: "비밀번호 찾기" });
    expect(forgotLink).toBeInTheDocument();
    expect(forgotLink).toHaveAttribute("href", "/forgot-password");
  });

  it("이메일 미입력 시 유효성 검증 오류가 표시된다", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    // 로그인 submit 버튼 클릭 (빈 폼)
    const submitButton = screen.getByRole("button", { name: /^로그인$/ });
    await user.click(submitButton);

    // 유효성 오류 메시지 확인
    await waitFor(() => {
      expect(
        screen.getByText("올바른 이메일 주소를 입력해주세요.")
      ).toBeInTheDocument();
    });
  });

  it("비밀번호가 8자 미만이면 오류가 표시된다", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByPlaceholderText("you@example.com"), "test@example.com");
    await user.type(screen.getByPlaceholderText("••••••••"), "1234567");

    const submitButton = screen.getByRole("button", { name: /^로그인$/ });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("비밀번호는 최소 8자 이상이어야 합니다.")
      ).toBeInTheDocument();
    });
  });

  it("Google 로그인 버튼이 존재한다", () => {
    render(<LoginPage />);
    expect(
      screen.getByRole("button", { name: "Google로 계속하기" })
    ).toBeInTheDocument();
  });
});
