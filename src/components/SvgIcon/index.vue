<template>
	<svg aria-hidden="true">
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
</template>
<script setup lang="ts">
interface Props {
	prefix?: string;
	name?: string;
	color?: string;
}

const props = withDefaults(defineProps<Props>(), {
	prefix: "icon",
	name: "",
	color: "#000"
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<script setup lang="ts">
export default {
	name: "SvgIcon"
};
</script>
