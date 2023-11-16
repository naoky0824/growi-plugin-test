import innerText from 'react-innertext';

import './CodeWithCopyButton.css';

const CopyButton = ({ text }: { text: string }): JSX.Element => {
  const clickHandler = async() => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <button
      className="btn btn-sm btn-copy btn-outline-secondary border-0 text-muted"
      data-toggle="tooltip" data-placement="top" title="Copy to clipboard"
      onClick={clickHandler}
    >
      cop
    </button>
  );
};

export const withCopyButton = (Code: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, inline, ...props }) => {
    if (inline) {
      return <Code {...props} inline>{children}</Code>;
    }

    return (
      <>
        <div className='btn-copy-container'>
          <CopyButton text={innerText(children)} />
        </div>
        <Code {...props}>{children}</Code>
      </>
    );
  };
};
