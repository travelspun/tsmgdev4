<script setup lang="ts"></script>
<template>
	<v-app app>
		<div
			class="relative flex flex-col min-h-screen overflow-hidden antialiased transition duration-150 bg-white "
		>
			<!-- <div class="relative"> -->
				<NavigationTopMenu />
			<!-- </div> -->

			<div class="relative">
				<slot />
			</div>

			<div class="relative w-full max-w-6xl px-2 pt-6 pb-12 mx-auto lg:px-16">
				<NavigationTheFooter />
			</div>

			
		</div>
	</v-app>
</template>
