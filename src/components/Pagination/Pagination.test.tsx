import { fireEvent, render, screen } from "@testing-library/react"
import Pagination from "@/components/Pagination"
import "@testing-library/jest-dom";

const InfoMock = {
    pages: 10,
    initialPage: 1,
}

describe('[Components]: Pagination', () => {
    test('should be in the DOM', () => {
        let mutationPage = 0
        render(<Pagination pageCount={InfoMock.initialPage} setPageIndex={(e) => {mutationPage = e}} pageIndex={InfoMock.pages} />);

    });
});