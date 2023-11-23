<script setup>
import { computed } from 'vue'
const prods = defineProps({
	totalPage: {
		type: Number,
		required: true
	},
	length: {
		type: Number,
		default: 3,
	},
	currentPage: {
		type: Number,
		default: 1,
	}
})
const $emit = defineEmits(['update:currentPage'])
const pages = computed(() => {
	const pages = []
	const half = Math.floor(prods.length / 2)
	let start = prods.currentPage - half
	let end = prods.currentPage + half

	if (start < 1) {
		start = 1
		end = prods.length
	}

	if (end > prods.totalPage) {
		end = prods.totalPage
		start = end - prods.length + 1
		if (start <= 0) start = 1
	}

	for (let i = start; i <= end; i++)
		pages.push(i)
	// console.log(currentPage.value)
	return pages
})
</script>
<template>
	<nav class="pagination">
		<ul class="pagination">
			<li class="page-item" :class="{ disabled: currentPage == 1 }">
				<a role="button" class="page-link" @click="$emit('update:currentPage', currentPage - 1)">
					<span>&laquo;</span>
				</a>
			</li>
			<li v-for="page in pages" :key="page" class="page-item" :class="{ active: currentPage == page }">
				<a role="button" class="page-link" @click.prevent="$emit('update:currentPage', page)">{{ page }}</a>
			</li>


			<li class="page-item" :class="{ disabled: currentPage == totalPage }">
				<a role="button" class="page-link" @click.prevent="$emit('update:currentPage', currentPage + 1)">
					<span>&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</template>
<style>
.pagination{
	display: flex;
	justify-content: center;
}
</style>
