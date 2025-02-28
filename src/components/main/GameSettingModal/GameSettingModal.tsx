import { ReactComponent as CircleIconSvg } from '@/assets/icons/CircleIcon.svg';
import { ReactComponent as XIconSvg } from '@/assets/icons/XIcon.svg';
import ModalTemplate from '@/components/common/ModalTemplate';
import useModal from '@/hooks/useModal';

import * as styles from './GameSettingModal.style';

const ModalCloseButton = () => {
  const { closeModal } = useModal();

  return <styles.CloseButton onClick={closeModal}>닫기</styles.CloseButton>;
};

const GameSettingModal = () => {
  return (
    <ModalTemplate title="세팅" button={<ModalCloseButton />}>
      <styles.Wrapper>
        <styles.SettingBox>
          <h5>Sound</h5>
          <styles.SoundOptionBox>
            <p className="selected">ON</p>
            <span>/</span>
            <p>OFF</p>
          </styles.SoundOptionBox>
        </styles.SettingBox>
        <styles.SettingBox>
          <h5>
            게임을 <br />
            그만 하시겠어요?
          </h5>
          <styles.QuitOptionBox>
            <CircleIconSvg />
            <XIconSvg />
          </styles.QuitOptionBox>
        </styles.SettingBox>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default GameSettingModal;
