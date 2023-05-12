import buttons from '@/styles/buttons.module.scss';

function PrimaryBigBtn(props) {
  const classStr = props.classStr ? props.classStr : '';
  const text = props.text;

  return (
    <button 
      className={`${classStr} ${buttons.primaryBigBtn}`}
    >
      {text}
    </button>
  );
}

export default PrimaryBigBtn;