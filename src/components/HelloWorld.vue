<template>
	<v-card class="p-40" style="width: 100%; height: 100%">
		<v-tabs v-model="tab" fixed-tabs>
			<v-tab
				v-for="(item, index) in tabsList"
				:key="item.text"
				:style="
					index === 0
						? 'margin:0;margin-right:auto'
						: index === tabsList.length - 1
						? 'margin:0;margin-left:auto'
						: 'margin:0 auto'
				"
			>
				<div class="m-r-8">{{ item.text }}</div>
				<v-icon>{{ item.icon }}</v-icon>
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="tab">
			<v-tab-item v-for="item in tabsList" :key="item.text">
				<v-card flat>
					<v-card-text>{{ item.text }}</v-card-text>
				</v-card>
			</v-tab-item>
		</v-tabs-items>
	</v-card>
</template>

<script>
export default {
	name: 'HelloWorld',

	data: () => ({
		tab: 0,
		tabsList: [
			{
				text: 'tab1',
				icon: 'mdi-plus',
			},
			{
				text: 'tab2',
				icon: 'mdi-minus',
			},
			{
				text: 'tab3',
				icon: 'mdi-antenna',
			},
		],
	}),
};
</script>
