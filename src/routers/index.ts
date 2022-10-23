import router from "@/routers/router";
import NProgress from "@/config/nprogress";

router.beforeEach((to, from, next) => {
	NProgress.start();
	setTimeout(() => {
		NProgress.done();
		next();
	}, 500);
});
router.afterEach(() => {
	NProgress.done();
});
export default router;
