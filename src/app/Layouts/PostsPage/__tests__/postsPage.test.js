import {render} from "@testing-library/react";
import {PostsPage} from "../index";
import {Provider} from "react-redux";
import {store} from "../../../store";

describe('Posts Page Testing', () => {
	const recived = render(<Provider store={store}><PostsPage/></Provider>);
	it('Render Test To Dom Element', () => {
		expect(recived).toMatchSnapshot();
	});
});