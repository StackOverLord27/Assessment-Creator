import { model, Schema } from "mongoose";

const assignmentSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		dueDate: {
			type: Date,
			required: true,
		},
		instructions: {
			type: String,
			required: true,
			trim: true,
		},
		questionTypes: {
			type: [String],
			required: true,
			default: [],
		},
		totalQuestions: {
			type: Number,
			required: true,
			min: 0,
		},
		marks: {
			type: Number,
			required: true,
			min: 0,
		},
		status: {
			type: String,
			required: true,
			trim: true,
		},
		generatedPaper: {
			type: Schema.Types.Mixed,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

const Assignment = model("Assignment", assignmentSchema);

export default Assignment;
export { assignmentSchema };
