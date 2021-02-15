function f_record(p_cols, p_val1, p_val2, p_val3) {
    document.write("<TR>");

    wk_str = "";
    if (p_cols >= 3) {
        wk_str = p_val1+p_val2+p_val3;
    } else {
        if (p_cols >= 2) {
            wk_str = p_val1+p_val2;
        } else {
            wk_str = p_val1;
        }
    }

    if (wk_str != "") {
        document.write("<TD WIDTH=\"25%\" VALIGN=\"TOP\">");
        document.write("<FONT SIZE=\"-1\">");
        if (p_val1 == "") {
            document.write("&nbsp;");
        } else {
            document.write(p_val1);
        }
        document.write("</FONT>");
        document.write("</TD>");
        if (p_cols >= 2) {
            if (p_cols >= 3) {
                document.write("<TD WIDTH=\"10%\" VALIGN=\"TOP\">");
            } else {
                document.write("<TD VALIGN=\"TOP\">");
            }
            document.write("<FONT SIZE=\"-1\">");
            if (p_val2 == "") {
                document.write("&nbsp;");
            } else {
                document.write(p_val2);
            }
            document.write("</FONT>");
            document.write("</TD>");
        }
        if (p_cols >= 3) {
            document.write("<TD VALIGN=\"TOP\">");
            document.write("<FONT SIZE=\"-1\">");
            if (p_val3 == "") {
                document.write("&nbsp;");
            } else {
                document.write(p_val3);
            }
            document.write("</FONT>");
            document.write("</TD>");
        }
    }
    document.write("</TR>");
}
