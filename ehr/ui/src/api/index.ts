import axios from "axios";
import {
	ContextResponse,
	Task,
	ServiceRequestCondition,
	ServiceRequestGoal,
	Organization,
	newTaskPayload,
	updateTaskPayload,
	Coding,
	Goal,
	Problem,
	newProblem
} from "@/types";

export const getContext = async (): Promise<ContextResponse> => {
	const res = await axios.get("/current-context");

	return res.data;
};

export const getTasks = async (): Promise<Task[]> => {
	const res = await axios.get("/task");

	return res.data;
};

export const createTask = async (payload: newTaskPayload): Promise<{ taskId: string }> => {
	const res = await axios.post("/task", payload);

	return res.data;
};

export const updateTask = async ({ id, ...data }: updateTaskPayload): Promise<Task> => {
	const res = await axios.put(`/task/${id}`, data);

	return res.data;
};

export const getServiceRequestConditions = async (): Promise<ServiceRequestCondition[]> => {
	const res = await axios.get("/support/conditions");

	return res.data;
};

export const getServiceRequestGoals = async (): Promise<ServiceRequestGoal[]> => {
	const res = await axios.get("/support/goals");

	return res.data;
};

export const getOrganizations = async (): Promise<Organization[]> => {
	const res = await axios.get("/support/organizations");

	return res.data;
};

export const getCategories = async (): Promise<Coding[]> => {
	const res = await axios.get("/mappings/categories");

	return res.data;
};

export const getRequests = async (code: string): Promise<Coding[]> => {
	const res = await axios.get(`/mappings/categories/${code}/servicerequest/codings`);

	return res.data;
};

export const getGoals = async(): Promise<Goal[]> => {
	//todo: remove mock after BE sync
	const res: Goal[] = [{
		name: "Reduce Medication Const",
		problems: ["Food Insecurity"],
		addedBy: "test",
		startDate: "2021-05-18T14:07:48",
		endDate: "",
		targets: ["fisrt", "second"],
		comments: [],
		category: {
			code: "111",
			display: "Food Insecurity"
		},
		code: {
			code: "10782290009",
			display: "Food Security"
		},
		status: "active"
	}, {
		name: "Reduce Medication Const",
		problems: ["Food Insecurity"],
		addedBy: "test",
		startDate: "2021-05-18T14:07:48",
		endDate: "2021-06-15T14:07:48",
		targets: ["fisrt", "second"],
		comments: [],
		category: {
			code: "111",
			display: "Food Insecurity"
		},
		code: {
			code: "10782290009",
			display: "Food Security"
		},
		status: "completed"
	}];

	return res;
};

export const getProblemCodes = async (): Promise<Coding[]> => {
	//todo: call real request and remove mocked data
	//const res = await axios.get("/mappings/problemCodes");

	//return res.data;

	const res: Coding[] = [{
		code: "Z59.49",
		display: "Lack of Adequate Food & Safe Drinking Water"
	},
	{
		code: "Z59.49",
		display: "Lack of Adequate Food & Safe Drinking Water"
	}];

	return res;
};


export const getProblems = async(): Promise<Problem[]> => {
	// todo: remove mocked data after BE sync
	// const res = await axios.get("/problem");
	// return res.data;
	const res: Problem[] =  [{
		id: "SDOHCC-Condition-HungerVitalSign-Example-1",
		name: "Hunger Vital Signs",
		basedOn: "Hunger Vital Signs assessment",
		onsetPeriod: {
			start: "2019-08-18T12:31:35.123Z"
		},
		goals: 0,
		actionSteps: 0,
		clinicalStatus: "active",
		code: "Lack of Adequate Food & Safe Drinking Water (Z59.49)",
		category: "test"
	},
	{
		id: "SDOHCC-Condition-HungerVitalSign-Example-2",
		name: "Hunger Vital Signs",
		basedOn: "Hunger Vital Signs assessment",
		onsetPeriod: {
			start: "2019-08-18T12:31:35.123Z",
			end: "2021-10-28T12:31:35.123Z"
		},
		goals: 0,
		actionSteps: 0,
		clinicalStatus: "resolved",
		code: "Insuficient Food Supply (706875005)",
		category: "test"
	}];

	return res;
};

// todo: change and remove mocked data after sync with BE
export const createProblem = async (payload: newProblem): Promise<newProblem> => {
	// const res = await axios.post("/problem", payload);
	// return res.data;
	return payload;
};
