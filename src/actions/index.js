import store from "../store";
import {
	deleteQuery,
	selectQuery,
	changeQuery,
	setQueryPath,
	addQueryFilter,
	deleteQueryFilter,
	moveQueryPosition,
	submitQuery,
	nameQuery,
	saveQuery,
	loadQuery
} from "./queries";

export default {
	onSelectQuery: (domain, queryIndex, position = null) => store.dispatch(selectQuery(domain, queryIndex, position)),
	onDeleteQuery: (queryIndex) => store.dispatch(deleteQuery(queryIndex)),
	onSetQueryPath: (path) => store.dispatch(setQueryPath(path)),
	onQueryChange: (fieldPath, value) => store.dispatch(changeQuery(fieldPath, value)),
	onAddQueryFilter: (fieldPath, value) => store.dispatch(addQueryFilter(fieldPath, value)),
	onDeleteQueryFilter: (queryIndex) => store.dispatch(deleteQueryFilter(queryIndex)),
	onMoveQueryPosition: (queryIndex, movement) => store.dispatch(moveQueryPosition(queryIndex, movement)),
	onSubmitQuery: () => store.dispatch(submitQuery()),
	onNameQuery: (value) => store.dispatch(nameQuery(value)),
	onSaveQuery: () => store.dispatch(saveQuery()),
	onLoadQuery: (name) => store.dispatch(loadQuery(name))
};