const sliderElement = document.querySelector('.effect-level__slider');
const levelInput = document.querySelector('.effect-level__value');
const previewImg = document.querySelector('.img-upload__preview img');


const resetSliderFilter = () => {
  previewImg.style.filter = 'none';
};

const destrotSlider = () => {
  sliderElement.noUiSlider.destroy();
};

const setImgFilter = (filter, value, um) => {
  previewImg.style.filter = `${filter}(${value + um})`;
};

const createSlider = (params) => {

  const sliderHandler = () => {
    const sliderValue = sliderElement.noUiSlider.get();
    levelInput.setAttribute('value', sliderValue);
    setImgFilter(params.filter, sliderValue, params.um);
  };

  noUiSlider.create(sliderElement, {
    range: {
      min: params.min,
      max: params.max,
    },
    direction: 'rtl',
    start: params.min,
    step: params.step,
    connect: 'upper',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', sliderHandler);
};


const updateSlider = (params) => {

  if (sliderElement.noUiSlider) {
    destrotSlider();
    resetSliderFilter();
  }

  if (params.filter === 'none') {
    return;
  }

  createSlider(params);
};


export {createSlider, updateSlider};
