import axios from "axios";
import {
	Consent,
	Concern,
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
	newProblem,
	NewConcernPayload,
	UpdateGoalPayload
} from "@/types";

export const getContext = async (): Promise<ContextResponse> => {
	const res = await axios.get("/current-context");

	return res.data;
};

export const getTasks = async (): Promise<Task[]> => {
	const res = await axios.get("/task");

	return res.data;
};

export const getConcerns = async (): Promise<Concern[]> => [{
	//todo: remove mock after BE sync
	concernStatus: "Active",
	name: "Hunger Vital Signs",
	assessmentDate: "2021-05-18T14:15:08",
	category: "Food Insecurity",
	basedOn: "Past",
	status: "send to patient"
}, {
	name: "Hunger Vital Signs",
	assessmentDate: "2021-05-18T14:15:08",
	category: "Food Insecurity",
	basedOn: "Past",
	status: "send to patient",
	concernStatus: "PromotedOrResolved"
}];

// TODO: Delete when BE will be ready
export const addConcernResponse = (payload: NewConcernPayload): Concern => ({
	name: payload.name,
	assessmentDate: payload.assessmentDate,
	category: payload.category,
	basedOn: payload.basedOn,
	status: payload.status,
	concernStatus: payload.concernStatus
});

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

//todo: remove mock after BE sync
export const getIcd10Codes = async (): Promise<Coding[]> => [{ display: "Transportation Insecurity", code: "Z59.82" }];
export const getSnomedCtCodes = async (): Promise<Coding[]> => [{ display: "Food Insecurity", code: "F19.12" }];

export const getRequests = async (code: string): Promise<Coding[]> => {
	const res = await axios.get(`/mappings/categories/${code}/servicerequest/codings`);

	return res.data;
};

export const getGoals = async (): Promise<Goal[]> => {
	//todo: remove mock after BE sync
	const res: Goal[] = [{
		id: "1",
		name: "Reduce Medication Const",
		problems: ["Food Insecurity"],
		addedBy: "test",
		startDate: "2021-05-18T14:07:48",
		endDate: "",
		targets: ["fisrt", "second"],
		comments: [{
			author: {
				display: "",
				id: "",
				resourceType: ""
			},
			text: "Some comments to share",
			time: "2021-05-18T14:07:48"
		}, {
			author: {
				display: "",
				id: "",
				resourceType: ""
			},
			text: "Another loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong comment",
			time: "2021-05-18T14:07:48"
		}],
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
		id: "2",
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

//todo: remove mock
export const updateGoal = async ({ id }: UpdateGoalPayload): Promise<Goal> => {
	const mock: Goal = {
		id,
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
		status: "active"
	};

	return mock;
	// const res = await axios.put(`/goal/${id}`, data);
	//
	// return res.data;
};

export const getProblemCodes = async (code: string): Promise<{ isd: Coding[], snomed: Coding[] }> => {
	// todo: call real request and remove mocked data
	// const res = await axios.get(`/mappings/categories/${code}/condition/codings`);
	//return res.data;

	const res: { isd: Coding[], snomed: Coding[] } = {
		isd: [{
			code: "Z59.49",
			display: "Lack of Adequate Food & Safe Drinking Water"
		},
		{
			code: "Z59.4229",
			display: "Lack of Adequate Food & Safe Drinking Water"
		}],
		snomed: [{
			code: "385767005",
			display: "Meals on wheels provision education"
		}]
	};

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
		codeISD: "Lack of Adequate Food & Safe Drinking Water (Z59.49)",
		codeSNOMED: "Meals on wheels provision education (385767005)",
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
		codeISD: "Lack of Adequate Food & Safe Drinking Water (Z59.49)",
		codeSNOMED: "Meals on wheels provision education (385767005)",
		category: "test"
	}];

	return res;
};

// todo: change and remove mocked data after sync with BE
export const createProblem = async (payload: newProblem): Promise<newProblem> =>
	// const res = await axios.post("/problem", payload);
	// return res.data;
	payload;


export const getConsents = async () => (await axios.get<Consent[]>("/consent")).data;

export const createConsent = async (name: string, attachment: File) => {
	const formData = new FormData();
	formData.append("name", name);
	formData.append("attachment", attachment);
	const resp = await axios.post<Consent>("/consent", formData);
	return resp.data;
};

export const getConsentAttachment = async (consentId: string) => (await axios.get<Blob>(`/consent/${consentId}/attachment`, { responseType: "blob" })).data;
