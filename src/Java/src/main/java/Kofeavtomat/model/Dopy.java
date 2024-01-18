package Kofeavtomat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kofeavtomat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Допы
 */
@Entity(name = "IISKofeavtomatДопы")
@Table(schema = "public", name = "Допы")
public class Dopy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Объем")
    private String объем;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kofe")
    @Convert("Kofe")
    @Column(name = "Кофе", length = 16, unique = true, nullable = false)
    private UUID _kofeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kofe", insertable = false, updatable = false)
    private Kofe kofe;


    public Dopy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public String getОбъем() {
      return объем;
    }

    public void setОбъем(String объем) {
      this.объем = объем;
    }


}