<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>id={JSON.stringify(data.user['_id'])}</h1>
<h1>email={JSON.stringify(data.user['email'])}</h1>
<h1>name={JSON.stringify(data.user['name'])}</h1>
