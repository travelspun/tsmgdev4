<script setup lang="ts">
    import type { SEO, PagesProjects, Post } from '~/types';

    const { globals } = useAppConfig();
    const { fileUrl } = useFiles();

</script>
<template>
	<BlockContainer>
		<section class="bg-white dark:bg-gray-900">
			<div class="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
				<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
				<p class="text-gray-500 sm:text-xl dark:text-gray-400 lg:px-48">Here we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
				<div class="mt-8 lg:mt-16 mb-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
					<div>
						<div class="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-primary-100 dark:bg-primary-900">
							<svg class="mx-auto w-16 h-16 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
						</div>
						<h3 class="mb-4 text-2xl font-bold dark:text-white">Just the right balance for growth</h3>
						<p class="mb-4 text-gray-500 dark:text-gray-400">Enterprise tools cost more, are difficult to use, and take longer to implement. According to G2, Flowbite is the easiest-to-use tool, with the fastest time to ROI.</p>
					</div>
					<div>
						<div class="inline-flex justify-center items-center mb-6 w-24 h-24 bg-purple-100 rounded-lg dark:bg-purple-900">
							<svg class="mx-auto w-16 h-16 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path></svg>
						</div>
						<h3 class="mb-4 text-2xl font-bold dark:text-white">Just the right balance for growth</h3>
						<p class="mb-4 text-gray-500 dark:text-gray-400">Enterprise tools cost more, are difficult to use, and take longer to implement. According to G2, Flowbite is the easiest-to-use tool, with the fastest time to ROI.</p>
					</div>
				</div>
				<p class="text-center">
					<a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400">
						Learn what makes Flowbite different <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
					</a>
				</p>
			</div>
		</section>

		<div class="">
			<div class="sticky top-0">I'm Fixed</div>
		</div>

		<div class="">
			<div class="">I'm Sticky</div>
		</div>

		<section class="bg-white dark:bg-gray-900">
			<div class="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
				<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
				<p class="text-gray-500 sm:text-xl dark:text-gray-400 lg:px-48">Here we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
				<div class="mt-8 lg:mt-16 mb-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
					<div>
						<div class="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-primary-100 dark:bg-primary-900">
							<svg class="mx-auto w-16 h-16 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
						</div>
						<h3 class="mb-4 text-2xl font-bold dark:text-white">Just the right balance for growth</h3>
						<p class="mb-4 text-gray-500 dark:text-gray-400">Enterprise tools cost more, are difficult to use, and take longer to implement. According to G2, Flowbite is the easiest-to-use tool, with the fastest time to ROI.</p>
					</div>
					<div>
						<div class="inline-flex justify-center items-center mb-6 w-24 h-24 bg-purple-100 rounded-lg dark:bg-purple-900">
							<svg class="mx-auto w-16 h-16 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path></svg>
						</div>
						<h3 class="mb-4 text-2xl font-bold dark:text-white">Just the right balance for growth</h3>
						<p class="mb-4 text-gray-500 dark:text-gray-400">Enterprise tools cost more, are difficult to use, and take longer to implement. According to G2, Flowbite is the easiest-to-use tool, with the fastest time to ROI.</p>
					</div>
				</div>
				<p class="text-center">
					<a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400">
						Learn what makes Flowbite different <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
					</a>
				</p>
			</div>
		</section>

		<!-- <section class="relative items-center w-full py-12">
			<BlocksBannerGroup />
		</section> -->
	</BlockContainer>
</template>

<style scoped>
.jointhemovement-sticky {
    z-index: 2147483647;
    height: 60px;
    background-color: #f5e8e0;
    justify-content: center;
    align-items: center;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 85px;
    bottom: auto;
    overflow: visible;
}
 /* div.sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: #666;
        padding: 40px;
        font-size: 25px;
      } */


</style>