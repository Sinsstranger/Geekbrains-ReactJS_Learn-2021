import {render} from "@testing-library/react";
import {PostItem} from "../../index";

describe('PostItem Test', () => {
	it('snapshot testing', () => {
		const component = render(<PostItem title="PostTitle" body="PostBody"/>);
		expect(component).toMatchSnapshot();
	});
});