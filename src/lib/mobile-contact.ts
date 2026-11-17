export function shouldShowMobileContact(params: {
  pathname: string;
  viewportWidth: number;
  scrollY: number;
  footerVisible: boolean;
  courseFormVisible: boolean;
  cookieNoticeVisible?: boolean;
}) {
  return params.viewportWidth < 768 && params.scrollY > 400 &&
    params.pathname !== "/contato" && !params.footerVisible && !params.cookieNoticeVisible &&
    !(params.pathname === "/cursos" && params.courseFormVisible);
}