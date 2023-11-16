import innerText from 'react-innertext';

import './NavWithAISearch.css';

const AISearch = ({ text }: { text: string }): JSX.Element => {
  const clickHandler = async() => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <input autocomplete="off" placeholder="AISearch ..." type="text" aria-autocomplete="both" aria-expanded="true" aria-haspopup="listbox" aria-owns="search-typeahead-asynctypeahead" role="combobox" class="rbt-input-main form-control rbt-input" value=""></input>
  );
};

export const withAISearch = (Code: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, inline, ...props }) => {
    if (inline) {
      return <nav {...props} inline>{children}</nav>;
    }

    return (
      <>
        <nav {...props}>{children}
          <div className='ai-search'>
            <AISearch text={innerText(children)} />
          </div>
        </nav>
      </>
    );
  };
};
