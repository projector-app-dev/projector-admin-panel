import {
	RichTextInput,
	RichTextInputToolbar,
	FormatButtons,
	ClearButtons,
    RichTextInputProps,
    AlignmentButtons,
} from 'ra-input-rich-text';

export const CustomRichTextInput = (props: RichTextInputProps ) => (
	<RichTextInput
		toolbar={
			<RichTextInputToolbar>
				<FormatButtons size="large" />
                <AlignmentButtons size="large" />
                <ClearButtons size="large" />
			</RichTextInputToolbar>
		}
		{...props}
	/>
);