import './App.css';

// The Holy Grail layout is a famous CSS page layout that has traditionally been hard to implement. It consists of a header, footer, and three columns. The left column contains navigation items, the middle column contains the page contents, and the right column contains ads.

// Implement the Holy Grail layout using just CSS. 
// Requirements
// Header
// Stretches horizontally across the whole page.
// 60px tall.
// Columns
// Both the left and right columns have a fixed width of 100px.
// The center column is fluid-width.
// All the columns should have the same height, regardless of which column is the tallest.
// Footer
// Stretches horizontally across the whole page.
// 100px tall.
// The footer should be at the bottom of the page even if there is not enough content to fill up the viewport height.

function App() {
  return (
    <div className="App">
      <div className="header">Header</div>
      <div className="nav">Navigation</div>
      <div className="content">Content</div>
      <div className="sidebar">Sidebar</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;

