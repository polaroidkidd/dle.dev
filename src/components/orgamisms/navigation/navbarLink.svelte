<script lang="ts">
	import classNames from 'classnames';
	export let target = '';
	export let text = '';
</script>

<a
	href={target}
	class={classNames(
		'text-xl',
		'h-14',
		'py-2',
		'justify-center uppercase',
		'cursor-pointer',
		'transition-all',
		'h-100',
		'flex',
		'flex-row',
		'items-center',
		'px-5',
		'border-transparent',
		'border-opacity-80',
		'hover:border-red-300',
		'hover:border-opacity-50',
		'dark:hover:bg-neutral-800',
		'border-b'
	)}
>
	{text}
</a>
