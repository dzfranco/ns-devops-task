import {
	validate,
	Validate,
	ValidatorConstraint,
	ValidatorConstraintInterface,
	ValidationArguments,
} from 'class-validator';

// returns true if it has xor relation with the specified key in the constraint
@ValidatorConstraint({ name: 'andConstraint', async: false })
export class AndConstraint implements ValidatorConstraintInterface {
	public validate(propertyValue: string, args: ValidationArguments) {
		return propertyValue && args.object[args.constraints[0]];
	}

	public defaultMessage(args: ValidationArguments) {
		return `Failed AND relation between "${args.property}" and "${args.constraints[0]}".`;
	}
}
