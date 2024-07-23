# Updates

- Renamed styled-components to `TagContainer`, `TagList`, and `TagItem` for clarity.
- Applied provided styles to `TagList` and `TagItem` for consistent tag display.
- Updated component to use `setupTags` and map over `newTags` to render tags with links."

--

- Updated BlogList component to correctly access nested fields in GraphQL query results.
- Added checks to ensure `description` and `tags` fields are handled properly.
- Applied conditional rendering for tags to avoid rendering errors with potential undefined values.
- Used console logging for debugging the data structure before rendering."
