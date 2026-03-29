function getQuestionKey(question, index) {
  return question?.id || question?.documentId || question?.step_number || index;
}

function getOptionKey(option, index) {
  return option?.id || option?.documentId || option?.value || index;
}

function getQuestionLabel(question, index, totalQuestions) {
  return question?.question_label || `Question ${index + 1} of ${totalQuestions}`;
}

function isSingleSelection(question) {
  return question?.selection_type === 'single_card' || question?.selection_type === 'single_text';
}

function isTextSelection(question) {
  return question?.selection_type === 'single_text';
}

function isMultiSelection(question) {
  return question?.selection_type === 'multi_card';
}

export default function QuizSection({
  quiz,
  currentQuestionIndex,
  answers,
  onNext,
  onPrevious,
  onSelectSingle,
  onToggleMulti,
}) {
  const questions = quiz?.questions || [];

  if (!questions.length) {
    return null;
  }

  const question = questions[currentQuestionIndex];

  if (!question) {
    return null;
  }

  const totalQuestions = questions.length;
  const questionKey = getQuestionKey(question, currentQuestionIndex);
  const selectedValue = answers[questionKey];
  const options = question.options || [];
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <section className="ga-quiz">
      <div className="quiz-wrap">
        <div className="q-step active">
          <div className="q-counter">{getQuestionLabel(question, currentQuestionIndex, totalQuestions)}</div>
          {question.title ? <h2 className="q-title">{question.title}</h2> : null}
          {question.description ? <p className="q-sub">{question.description}</p> : null}

          {isTextSelection(question) ? (
            <div className="q-single">
              {options.map((option, optionIndex) => {
                const optionKey = getOptionKey(option, optionIndex);
                const isSelected = selectedValue === option.value;

                return (
                  <div
                    key={optionKey}
                    className={`q-single-opt${isSelected ? ' selected' : ''}`}
                    onClick={() => onSelectSingle(questionKey, option.value)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        onSelectSingle(questionKey, option.value);
                      }
                    }}
                  >
                    <div className="opt-check">{isSelected ? '✓' : ''}</div>
                    <span>{option.title}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="q-options">
              {options.map((option, optionIndex) => {
                const optionKey = getOptionKey(option, optionIndex);
                const isSelected = isMultiSelection(question)
                  ? Array.isArray(selectedValue) && selectedValue.includes(option.value)
                  : selectedValue === option.value;

                return (
                  <div
                    key={optionKey}
                    className={`q-opt${isSelected ? ' selected' : ''}`}
                    onClick={() => {
                      if (isMultiSelection(question)) {
                        onToggleMulti(questionKey, option.value);
                        return;
                      }

                      onSelectSingle(questionKey, option.value);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        if (isMultiSelection(question)) {
                          onToggleMulti(questionKey, option.value);
                          return;
                        }

                        onSelectSingle(questionKey, option.value);
                      }
                    }}
                  >
                    {option.icon ? <div className="opt-icon">{option.icon}</div> : null}
                    <div className="opt-text">
                      {option.title ? <h4>{option.title}</h4> : null}
                      {option.subtext ? <p>{option.subtext}</p> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="q-nav">
            {currentQuestionIndex > 0 ? (
              <button type="button" className="btn-prev" onClick={onPrevious}>
                {quiz?.previous_button_text || '←'}
              </button>
            ) : null}
            <button type="button" className="btn-next" onClick={onNext}>
              {isLastQuestion
                ? quiz?.final_button_text || 'Get My Assessment →'
                : quiz?.next_button_text || 'Next Question →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
