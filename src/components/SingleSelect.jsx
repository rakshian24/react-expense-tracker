import React from 'react';
import ReactSelect, { components } from 'react-select';
import { BsChevronDown } from 'react-icons/bs';

const SingleSelect = props => {
  const IndicatorsContainer = props => {
    return (
      components.IndicatorsContainer && (
        <components.IndicatorsContainer
          {...props}
          className="indicator-wrapper"
        >
          {components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
              <span style={{ paddingRight: '8px', marginTop: '6px' }}>
                <BsChevronDown />
              </span>
            </components.DropdownIndicator>
          )}
        </components.IndicatorsContainer>
      )
    );
  };

  const GroupHeading = props => <components.GroupHeading {...props} />;

  const Control = props => {
    let newProps = { ...props };

    return (
      <components.Control
        {...newProps}
        className={`dropdown-control ${
          newProps.isFocused ? 'dropdown-control-focused' : ''
        }`}
      />
    );
  };

  const Menu = props => {
    const newProps = {
      ...props,
      className: `dropdown-menu`,
    };
    return (
      <>
        <components.Menu {...newProps}>{props.children}</components.Menu>
      </>
    );
  };

  const MenuList = props => {
    const newProps = {
      ...props,
      className: `dropdown-menu-inner`,
    };
    return <components.MenuList {...newProps} />;
  };

  const Option = props => {
    const newProps = {
      ...props,
    };

    return <components.Option {...newProps} />;
  };
  return (
    <ReactSelect
      isLoading={props.loading}
      components={{
        Control,
        IndicatorsContainer,
        Option,
        Menu,
        MenuList,
        GroupHeading,
      }}
      placeholder={props.placeholder}
      isSearchable={false}
      isClearable={false}
      getOptionLabel={option => `${option.label}`}
      getOptionValue={option => option.value}
      name={props.name}
      onChange={e => props.onChange(e)}
      options={props.options}
      defaultValue={props.defaultValue}
      styles={{
        menu: base => ({ ...base, zIndex: 9999 }),
        control: base => ({
          ...base,
          backgroundColor: props.currentThemeBG,
          border: 0,
          boxShadow: 'none',
        }),
        singleValue: base => ({
          ...base,
          color: props.currentThemeColor,
        }),
      }}
    />
  );
};

export default SingleSelect;
