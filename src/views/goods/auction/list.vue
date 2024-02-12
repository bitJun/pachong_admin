<template>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column fixed prop="date" label="商品id" width="150" />
		<el-table-column prop="name" label="商品名" width="120" />
		<el-table-column prop="state" label="起拍价" width="120" />
		<el-table-column prop="city" label="加价幅度" width="120" />
		<el-table-column prop="address" label="当前拍价" width="120" />
		<el-table-column prop="zip" label="保证金" width="120" />
		<el-table-column prop="zip" label="库存" width="120" />
		<el-table-column prop="zip" label="发布人" />
		<el-table-column prop="zip" label="参拍人" width="120" />
		<el-table-column prop="zip" label="拍卖状态" width="120" />
		<el-table-column fixed="right" label="操作" width="180">
			<template #default>
				<el-button link type="primary" size="small">关闭拍卖</el-button>
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
