import React from 'react';
import {
  FormContainer,
  FormInput,
  DepthSelect,
  SubmitButton,
} from './styles';

const DEPTH_OPTIONS = [
  { value: 'quick_scan', label: 'Quick Scan (1-2 sources)' },
  { value: 'standard', label: 'Standard (3-5 sources)' },
  { value: 'deep_dive', label: 'Deep Dive (5+ sources)' },
];

function ResearchForm({ query, setQuery, depth, setDepth, onSubmit, isDisabled }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !isDisabled) {
      onSubmit();
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="Enter your research question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={isDisabled}
      />
      <DepthSelect
        value={depth}
        onChange={(e) => setDepth(e.target.value)}
        disabled={isDisabled}
      >
        {DEPTH_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </DepthSelect>
      <SubmitButton type="submit" disabled={isDisabled || !query.trim()}>
        {isDisabled ? 'Researching...' : 'Start Research'}
      </SubmitButton>
    </FormContainer>
  );
}

export default ResearchForm;