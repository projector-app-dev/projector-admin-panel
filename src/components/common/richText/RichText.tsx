import {
	RichTextInput,
	RichTextInputToolbar,
	FormatButtons,
	ClearButtons,
    RichTextInputProps,
    AlignmentButtons,
	LinkButtons,
} from 'ra-input-rich-text';

export const CustomRichTextInput = (props: RichTextInputProps ) => (
	<RichTextInput
		toolbar={
			<RichTextInputToolbar>
				<FormatButtons size="large" />
                <AlignmentButtons size="large" />
                <ClearButtons size="large" />
				<LinkButtons size="large" />
			</RichTextInputToolbar>
		}
		{...props}
	/>
);