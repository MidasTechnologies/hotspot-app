import HotspotIcon from './midas.svg'
import { MakerHotspot } from '../hotspotMakerTypes'
import ANTENNAS from './antennas'

const MIDAS_926_B = {
  name: 'Midas 926 Gateway',
  icon: HotspotIcon,
  onboardType: 'BLE',
  translations: {
    en: {
      diagnostic:
        '<b><white>Diagnostic support allows Midas to identify issues with your Hotspot in a secure way.</white></b>\n\nMidas will never have access to private keys and will only ever be able to access your Hotspot and not any other devices on your Network.\n\nIf you would like to opt-out of diagnostic support please email <purple><b>support@Midaswireless.com</b></purple> from the email used to purchase the Hotspot.',
      power: [
        'Plug in the provided power adapter into an outlet near a window and screw in the provided antenna on the back of the Hotspot.',
        'The Hotspot is ready when the second indicator light is steady green.',
      ],
      bluetooth: [
        'Use the provided pin to press the BT Button on the back of the Hotspot and hold for more than 15 seconds.',
        'The hotspot is ready to pair when the third indicator light turns blue.\n\nMake sure your phone\'s Bluetooth is turned on! And Move the phone close to the device to increase the success rate of device connection!',
      ],
    },
    ja: {
      diagnostic:
        '<b><white>診断サポートにより、MidasはHotspotの問題を安全な方法で特定できます。</white></b>\n\nMidasが秘密キーにアクセスすることはありません。お使いのHotspotにのみアクセスし、ネットワーク上の他のデバイスにはアクセスしません。\n\n診断サポートをオプトアウトする場合は、Hotspotの購入時に使用したメールアドレスを使用して、<purple><b>support@Midaswireless.com</b></purple>までメールでご連絡ください。',
      power: [
        '付属の電源アダプターを窓の近くにあるコンセントに差し込み、Hotspotの背面に付属のアンテナを回して取り付けます。',
        '2番目のインジケータライトが緑色に点灯すると、Hotspotの準備が整います。 ',
      ],
      bluetooth: [
        '付属のピンを使用して、Hotspotの背面にあるBTボタンを押し、15秒以上押し続けます。 ',
        '3番目のインジケータライトが青色に変わると、Hotspotをペアリングする準備が整います。 \n\nスマートフォンのBluetoothがオンになっていることを確認してください。 そして、電話をデバイスの近くに移動して、デバイス接続の成功率を高めます！ ',
      ],
    },
    ko: {
      diagnostic:
        '<b><white>Midas은 진단 지원을 통해 안전한 방법으로 Hotspot에서 발생하는 문제를 식별할 수 있습니다.</white></b>\n\nMidas은 개인 키에 대한 액세스 권한이 없으며 네트워크 내의 다른 기기를 제외하고 Hotspot에만 액세스할 수 있습니다.\n\n진단 지원을 선택 취소하려면 Hotspot을 구매할 때 사용한 이메일을 통해 <purple><b>support@Midaswireless.com</b></purple>으로 이메일을 보내주시기 바랍니다.',
      power: [
        '제공된 전원 어댑터를 창가 부근의 콘센트에 연결하고 제공된 안테나를 Hotspot 뒷면에 나사로 고정합니다.',
        '두 번째 표시등이 녹색으로 계속 켜져 있으면 Hotspot이 준비된 것입니다. ',
      ],
      bluetooth: [
        '제공된 핀을 사용하여 Hotspot 뒷면의 BT 버튼을 누르고 15초 이상 유지합니다. ',
        '세 번째 표시등이 파란색으로 바뀌면 Hotspot을 페어링할 준비가 된 것입니다.\n\n휴대전화의 블루투스가 켜져 있는지 확인하세요! 그리고 휴대폰을 기기 가까이로 옮기면 기기 연결 성공률이 높아집니다! ',
      ],
    },
    zh: {
      diagnostic:
        '<b><white>诊断支持帮助 Midas 安全确认您的 Hotspot 问题。</white></b>\n\nMidas 绝不会访问私人密钥，且仅可访问您的 Hotspot，无法访问您网络中的任何其他设备。\n\n若选择退出诊断支持，请使用购买 Hotspot 时提供的电子邮箱发送请求至 <purple><b>support@Midaswireless.com</b></purple>。',
      power: [
        '将电源适配器插入靠窗的插座，并将天线插入 Hotspot 背面并旋紧。',
        '当第二个指示灯为绿色常亮时，即表示 Hotspot 准备就绪。',
      ],
      bluetooth: [
        '使用随附的大头针按下 Hotspot 背面的 BT 按钮，长按 15 秒钟以上。',
        '当第三个指示灯为蓝色常亮时，即表示 Hotspot 准备进行配对。\n\n请务必打开您手机的蓝牙功能，并把手机靠近设备以提高设备连接成功率！',
      ],
    },
  },
  antenna: {
    us: ANTENNAS.MIDAS_GATEWAY_US,
    default: ANTENNAS.MIDAS_GATEWAY_CN,
  },
} as MakerHotspot

export default { MIDAS_926_B }
