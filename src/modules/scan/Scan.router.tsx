export const scanRouter = {
  path: "/scan",
  async lazy() {
    let { Scan } = await import("./Scan.page.tsx");
    return { Component: Scan };
  },
  children: [],
};
