import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./Navigation";

// モックの関数を作成
const mockOnAboutClick = jest.fn();
const mockOnSkillsClick = jest.fn();
const mockOnProjectsClick = jest.fn();
const mockOnContactClick = jest.fn();

// Framer Motionのアニメーションをモック
jest.mock("framer-motion", () => {
  const actual = jest.requireActual("framer-motion");
  return {
    ...actual,
    motion: {
      nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

describe("Navigation Component", () => {
  beforeEach(() => {
    // 各テスト前にモック関数をリセット
    mockOnAboutClick.mockClear();
    mockOnSkillsClick.mockClear();
    mockOnProjectsClick.mockClear();
    mockOnContactClick.mockClear();
  });

  it("renders the navigation component correctly", async () => {
    render(
      <Navigation
        onAboutClick={mockOnAboutClick}
        onSkillsClick={mockOnSkillsClick}
        onProjectsClick={mockOnProjectsClick}
        onContactClick={mockOnContactClick}
      />
    );

    // ロゴとタイトルが表示されることを確認
    await waitFor(() => {
      expect(screen.getByText("DevPortfolio")).toBeInTheDocument();
    });
  });

  it("calls the correct function when navigation links are clicked", async () => {
    render(
      <Navigation
        onAboutClick={mockOnAboutClick}
        onSkillsClick={mockOnSkillsClick}
        onProjectsClick={mockOnProjectsClick}
        onContactClick={mockOnContactClick}
      />
    );

    // ナビゲーションリンクが表示されるまで待機
    await waitFor(() => {
      expect(screen.getByText("About")).toBeInTheDocument();
    });

    // 各ナビゲーションリンクをクリックして、正しい関数が呼び出されることを確認
    fireEvent.click(screen.getByText("About"));
    expect(mockOnAboutClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Skills"));
    expect(mockOnSkillsClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Projects"));
    expect(mockOnProjectsClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Contact"));
    expect(mockOnContactClick).toHaveBeenCalledTimes(1);
  });

  it("toggles mobile menu when menu button is clicked", async () => {
    // ビューポートをモバイルサイズに設定
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    render(
      <Navigation
        onAboutClick={mockOnAboutClick}
        onSkillsClick={mockOnSkillsClick}
        onProjectsClick={mockOnProjectsClick}
        onContactClick={mockOnContactClick}
      />
    );

    // メニューボタンが表示されるまで待機
    await waitFor(() => {
      const menuButton = screen.getByRole("button", { name: "" });
      expect(menuButton).toBeInTheDocument();

      // メニューボタンをクリックしてモバイルメニューを開く
      fireEvent.click(menuButton);
    });

    // モバイルメニューが表示されることを確認
    await waitFor(() => {
      expect(screen.getAllByText("About")[0]).toBeVisible();
      expect(screen.getAllByText("Skills")[0]).toBeVisible();
      expect(screen.getAllByText("Projects")[0]).toBeVisible();
      expect(screen.getAllByText("Contact")[0]).toBeVisible();
    });
  });

  it("closes mobile menu when a navigation link is clicked", async () => {
    // ビューポートをモバイルサイズに設定
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    render(
      <Navigation
        onAboutClick={mockOnAboutClick}
        onSkillsClick={mockOnSkillsClick}
        onProjectsClick={mockOnProjectsClick}
        onContactClick={mockOnContactClick}
      />
    );

    // メニューボタンが表示されるまで待機
    await waitFor(() => {
      const menuButton = screen.getByRole("button", { name: "" });

      // メニューボタンをクリックしてモバイルメニューを開く
      fireEvent.click(menuButton);
    });

    // モバイルメニューが表示されることを確認
    await waitFor(() => {
      const aboutLink = screen.getAllByText("About")[0];
      expect(aboutLink).toBeVisible();

      // Aboutリンクをクリックする
      fireEvent.click(aboutLink);
    });

    // Aboutリンクがクリックされたことを確認
    expect(mockOnAboutClick).toHaveBeenCalledTimes(1);
  });

  it("changes navigation background on scroll", async () => {
    render(
      <Navigation
        onAboutClick={mockOnAboutClick}
        onSkillsClick={mockOnSkillsClick}
        onProjectsClick={mockOnProjectsClick}
        onContactClick={mockOnContactClick}
      />
    );

    // 初期状態では背景が透明であることを確認
    await waitFor(() => {
      const nav = document.querySelector("nav");
      expect(nav).toHaveClass("bg-transparent");
      expect(nav).not.toHaveClass("glass");
    });

    // スクロールイベントをシミュレート
    global.scrollY = 100;
    fireEvent.scroll(window);

    // スクロール後は背景がglassクラスを持つことを確認
    await waitFor(() => {
      const nav = document.querySelector("nav");
      expect(nav).toHaveClass("glass");
      expect(nav).not.toHaveClass("bg-transparent");
    });
  });
});
