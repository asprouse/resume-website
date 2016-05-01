import { LOAD_RESUME } from '../actions/ActionTypes';

const initialState = {
  loaded: false,
  loading: false
};

function linkTechnologies(experiences, technologies) {
  // TODO this really shouldn't rely on side-effects
  for (const experience of experiences) {
    for (const project of experience.projects) {
      project.technologies = project.technologies.map(id => ({ id, ...technologies[id] }));
    }
  }
}

export default function auth(state = initialState, action = {}) {
  const payload = action.payload;

  switch (action.type) {
  case `${LOAD_RESUME}_PENDING`:
    return {
      ...state,
      loading: true
    };

  case `${LOAD_RESUME}_FULFILLED`:
    linkTechnologies(payload.experience, payload.technologies);

    return {
      ...state,
      loaded: true,
      loading: false,
      ...action.payload
    };

  default:
    return state;
  }

}
