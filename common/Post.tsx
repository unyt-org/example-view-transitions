import List from "common/List.ts";

export default (id: number) => {
	const post = List[id]!;
	return <main>
		<a>Back</a>
		<div class="post">
				<img src={post.image}/>
				<div>
					<span>{post.sender}</span>
					<span>{post.endpoint}</span>
				</div>
			</div>
			<div class="text"></div>
		</div>
	</main>
}