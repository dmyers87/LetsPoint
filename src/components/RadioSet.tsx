import React from 'react';
import cx from 'classnames';
import labelCSS from './labelCSS';

type RadioSetProps = {
  id: string;
  value: TOption;
  onChange: (value: TOption) => any;
  disabled?: boolean;
  allVotes: { [option: number]: number };
};
type TOption = number;

const RadioSet: React.FC<RadioSetProps> = ({ id, value, onChange, disabled = false, allVotes }) => {
  const options = [1, 2, 3, 5, 8, 13, 21, 34];

  return (
    <fieldset>
      <legend className={labelCSS}>Your vote</legend>

      <div className="flex leading-normal">
        <div className="flex mr-3 bg-grey-0 rounded-sm shadow-md">
          <RadioButton
            key={0}
            name={id}
            value="Abstain"
            totalVotes={allVotes[0]}
            label="?"
            tooltip={`Vote a "?" if you want to abstain from voting, or feel the ticket needs more conversation.`}
            checked={0 === value}
            onChange={() => onChange(0)}
            className="px-3 sm:px-4 md:px-6"
            disabled={disabled}
          />
        </div>
        <div className="flex-auto flex bg-grey-0 rounded-sm shadow-md">
          {options.map(option => (
            <RadioButton
              key={option}
              checked={option === value}
              className="flex-1"
              label={option.toString()}
              name={id}
              onChange={() => onChange(option)}
              totalVotes={allVotes[option]}
              value={option.toString()}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </fieldset>
  );
};
export default RadioSet;

type RadioButtonProps = {
  checked: boolean;
  className?: string;
  label: string;
  name: string;
  onChange: (e: any) => any;
  tooltip?: string;
  totalVotes?: number;
  value: string;
  disabled: boolean;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  className,
  label,
  name,
  onChange,
  tooltip,
  totalVotes,
  value,
  disabled,
}) => {
  return (
    <label
      title={tooltip}
      className={cx(className, 'relative py-2 text-center rounded-sm', {
        'bg-violet-5 text-white shadow ': checked,
        'cursor-pointer bg-white hover:bg-violet-1': !checked && !disabled,
      })}
    >
      <input
        className="hidden"
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      {label}

      {totalVotes && (
        <span
          title={`This option received ${totalVotes} votes`}
          className="absolute w-full pin-b pin-l break-words px-1"
          style={{ lineHeight: '5px', height: '15px' }}
        >
          {new Array(totalVotes).fill(0).map(() => '.')}
        </span>
      )}
    </label>
  );
};
