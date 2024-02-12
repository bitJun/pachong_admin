<template>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column fixed prop="date" label="商品id" />
		<el-table-column prop="name" label="商品名" />
		<el-table-column prop="state" label="价格" />
		<el-table-column prop="zip" label="商品状态" />
		<el-table-column fixed="right" label="操作" width="260">
			<template #default>
				<el-button link type="primary" size="small">编辑</el-button>
				<el-button link type="primary" size="small">下架</el-button>
				<el-button link type="primary" size="small">查看详情</el-button>
				<el-button link type="primary" size="small">预览商品</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>
<script setup>
	const tableData = [
		{
			date: '2016-05-03',
			name: 'Tom',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
			tag: 'Home',
		},
		{
			date: '2016-05-02',
			name: 'Tom',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
			tag: 'Office',
		},
		{
			date: '2016-05-04',
			name: 'Tom',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
			tag: 'Home',
		},
		{
			date: '2016-05-01',
			name: 'Tom',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
			tag: 'Office',
		},
	]
</script>
