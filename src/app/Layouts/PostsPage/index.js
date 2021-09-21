import './PostsPage.sass';
import {getPostsByRequest} from "../../store/Posts/actions";
import {useSelector, useDispatch} from "react-redux";
import {getPosts} from "../../store/Posts/selectors";
import {useCallback, useEffect} from "react";
import {PostItem} from "../../components/Posts";

export const PostsPage = (props) => {
	const {error, loading, items} = useSelector(getPosts);
	const dispatch = useDispatch();
	const handleRefreshPosts = useCallback(() => {
		dispatch(getPostsByRequest());
	}, [dispatch]);
	useEffect(() => {
		handleRefreshPosts();
	}, [handleRefreshPosts]);
	if (loading) {
		return <p>Идет загрузка</p>
	}
	if (error) {
		return (
			<div>
				<p>{error}</p>
				<button onClick={handleRefreshPosts}>Перезапросить</button>
			</div>
		);
	}
	return (
		<div className="posts">
			{items.map(post => <PostItem body={post.body} title={post.title} key={post.id}/>)}
		</div>
	);
}