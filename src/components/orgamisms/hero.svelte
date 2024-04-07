<script lang="ts">
	import { onMount } from 'svelte';
	import classNames from 'classnames';
	import { Swiper } from 'swiper';
	import { Autoplay } from 'swiper/modules';

	import 'swiper/css';
	import 'swiper/css/autoplay';

	import avatar from '@assets/images/daniel_einars-400x500.3aa2364c.jpg';
	import Avatar from '@components/molecules/avatar.svelte';
	import HeroText from '@components/molecules/heroText.svelte';

	onMount(() => {
		new Swiper('.cta-swiper', {
			modules: [Autoplay],
			spaceBetween: 30,
			allowTouchMove: false,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
				stopOnLastSlide: true
			}
		});
	});
</script>

<div class={classNames('flex', 'flex-col', 'items-center', 'min-h-[600px]')}>
	<Avatar alt="" imageSrc={avatar} />

	<HeroText text="I help companies" />

	<div class="relative w-screen">
		<div class="swiper cta-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<HeroText text="increase conversions." />
				</div>
				<div class="swiper-slide">
					<HeroText text="generate leads." />
				</div>
				<div class="swiper-slide">
					<HeroText text="tackle technical debt." />
				</div>
				<div class="swiper-slide">
					<HeroText text="design customer journeys." />
				</div>
				<div class="swiper-slide">
					<HeroText text="optimize landingpages." />
				</div>
				<div class="swiper-slide">
					<HeroText text="improve customer retention." />
				</div>
				<div class="swiper-slide">
					<HeroText text="build web applications." />"
				</div>
				<div class="swiper-slide">
					<HeroText text="boost developer productivity." />
				</div>
				<div class="swiper-slide">
					<HeroText text="grow." />
				</div>
			</div>
		</div>
	</div>
</div>
