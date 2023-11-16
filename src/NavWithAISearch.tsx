import innerText from 'react-innertext';

import './NavWithAISearch.css';

const AISearch = ({ text }: { text: string }): JSX.Element => {
  const clickHandler = async() => {
    alert(text);
    // await navigator.clipboard.writeText(text);
  };

  return (
    <input
      autoComplete="off"
      placeholder="Search ..."
      type="text"
      aria-autocomplete="both"
      aria-expanded="true"
      aria-haspopup="listbox"
      aria-owns="search-typeahead-asynctypeahead"
      role="combobox"
      // class="rbt-input-main form-control rbt-input"
      value=""
    ></input>
  );
};

export const withAISearch = (Nav: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, inline, ...props }) => {
    if (inline) {
      return <Nav {...props} inline>{children}</Nav>;
    }

    return (
      <>
        <Nav {...props}>
          {children}
          <div className='btn-copy-container'>
            <AISearch text={innerText(children)} />
          </div>
        </Nav>
      </>
    );
  };
};
