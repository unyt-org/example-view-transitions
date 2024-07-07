import List from "common/List.ts";

export default (id: number) => {
	const post = List[id]!;
	return <main>
		<a href="/">Back</a>
		<div class="post">
			<div class="header">
				<img src={post.image}/>
				<div>
					<span>{post.sender}</span>
					<span>{post.endpoint}</span>
				</div>
			</div>
			<div class="text">{post.text}</div>
			<span class="date">{new Date(post.date).toLocaleString()}</span>
			<div class="footer">
				<div>
					<span>120</span>
					REPOSTS
				</div>
				<div>
					<span>270</span>
					LIKES
				</div>
			</div>
		</div>
	</main>
}