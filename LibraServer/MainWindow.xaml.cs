using LibraServer.webSocketServer;
using MahApps.Metro.Controls;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace LibraServer
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : MetroWindow
    {

        private Server webSocketServer;

        public MainWindow()
        {
            InitializeComponent();

            webSocketServer = new Server();
            webSocketServer.OnLog += OnWebSocketServerLog;
        }

        private void OnWebSocketServerLog(string log)
        {
            this.logListBox.Dispatcher.Invoke(new Action(delegate
            {
                logListBox.Items.Add(log);
                logListBox.ScrollIntoView(logListBox.Items.Count);
            }));
        }

        private void ShowImgCode(Bitmap bitmap)
        {
            BitmapSource bs = Imaging.CreateBitmapSourceFromHBitmap(bitmap.GetHbitmap(), IntPtr.Zero, Int32Rect.Empty, BitmapSizeOptions.FromEmptyOptions());
            qrCodeImg.Source = bs;
            qrCodeImg.Width = bs.PixelWidth;
            qrCodeImg.Height = bs.PixelHeight;
        }

        private void OnStartServer(object sender, RoutedEventArgs e)
        {
            if(webSocketServer.Start(ipTextBox.Text, (int)portNumeric.Value))
            {
                ShowImgCode(webSocketServer.CreateImgCode(html5TextBox.Text));
            }
        }

        private void OnStopServer(object sender, RoutedEventArgs e)
        {
            webSocketServer.Stop();
        }
    }
}
