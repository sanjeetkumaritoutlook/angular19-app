Explanation of Pagination:
Query Parameters (_page, _limit): The API URL is updated with query parameters ?&_page=<pageNumber>&_limit=<pageSize> to request a specific page of data. In this case, pageSize controls how many items are fetched per page.

Page Navigation:

The nextPage() method increments the currentPage and fetches the next set of data.
The previousPage() method decrements the currentPage and fetches the previous set of data, but only if currentPage > 1 (prevent going to page 0).
Displaying Pagination Controls: The template includes buttons to navigate between pages, and the currentPage is displayed to show the user the current page number

---
Enhanced Output with Pagination:
On the first page, you would see 5 users displayed.
You can click "Next" to fetch the next set of 5 users.
The "Previous" button will only be enabled when you are on a page greater than 1.
--
Key Enhancements:
Error Handling: The app now gracefully handles errors and displays an appropriate message when the API request fails.
Pagination: Large datasets are now handled efficiently with pagination, improving the user experience by loading only a subset of data at a time.
---
 advanced topics such as infinite scrolling, sorting, or filtering in the context of large data sets?
 --
 1. Infinite Scrolling
Infinite scrolling dynamically loads data as the user scrolls down, without the need for pagination controls.

Implementation Steps:
Install a Scrolling Library (Optional):

For better performance, you can use the ngx-infinite-scroll package.
